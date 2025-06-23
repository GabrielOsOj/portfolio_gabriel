import { AfterViewInit, Component, ElementRef, HostListener, input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { ProyectCardComponent } from './project-card/project-card.component';
import { ProjectSvService } from './projects-service/project-sv.service';
import { ProjectIF } from './projects-models/project-if';
import { CommonModule } from '@angular/common';
import { ProjectsModalComponent } from "./projects-modal/projects-modal.component";
import { ProjectsModalService } from '../../Core/services/projectsModal/projects-modal.service';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProyectCardComponent, CommonModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent implements AfterViewInit {

  @ViewChildren('cardContainer') carruselItems!:QueryList<ElementRef<HTMLDivElement>>
  activeIndex: number = 0;

  isVisible = input<boolean>();

  nextPage: string = "HABILIDADES";
  nextSection: string = "tecnologies"

  projectsList: Array<ProjectIF>;

  constructor(private projectSv: ProjectSvService,
    private modalSv: ProjectsModalService
  ) {
    this.projectsList = this.projectSv.getProjectList();
  }

  public openProject(id: number): void {
    this.modalSv.loadProjectData(this.projectsList[id]);
    this.modalSv.openModal()
  }

  public nextProject(): void {
    this.activeIndex = (this.activeIndex > 0) ?
      this.activeIndex - 1 :
      this.projectsList.length - 1;

    this.updateCarouselClasses()
  }

  public previousProject(): void {
    this.activeIndex = (this.activeIndex < this.projectsList.length - 1) ?
      this.activeIndex + 1 :
      0;
    this.updateCarouselClasses()
  }

  public setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  ngAfterViewInit(): void {
    this.updateCarouselClasses()
  }

  private updateCarouselClasses() {
    console.log("activo!")
    const cards = this.carruselItems.toArray();

    cards.forEach((card, index) => {
      const nativeElement = card.nativeElement;

      nativeElement.classList.remove('left', 'center', 'right');

      const position =
        index === this.activeIndex ? 'center' :
          index === (this.activeIndex + 1) % cards.length ? 'right' : 'left';

      nativeElement.classList.add(position);
    });
  }
}
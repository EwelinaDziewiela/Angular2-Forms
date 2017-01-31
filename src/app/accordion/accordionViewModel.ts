export class AccordionViewModel {
  isVisible: boolean;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.isVisible = false;
    this.title = title;
    this.description = description;

  }

  toggleContent() {
    this.isVisible = !this.isVisible;

  }
}



export interface INavbarItems {
  label: string;
  href: string;
}

export interface IProject {
  title: string;
  imageKey: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
  isSourceCodeVisible: boolean;
}

export interface IProjectCard {
  key: number;
  project: IProject;
}

export interface IContactArray {
  key: string;
  label: string;
  imgAlt: string;
  href: string;
}

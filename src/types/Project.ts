export default interface ProjectType {
  id: string;
  title: string;
  subtitle?: string[] | null;
  description: string;
  date?: Date | null;
  date_start?: Date | null;
  date_end?: Date | null;
  tech_stack?: string[];
  link?: string | null;
}

export type singleCase = {
  name: { en: string; pl: string };
  url: string;
  hoverBgColor: string;
  hoverFontColor: string;
};

export type UseCase = {
  name: { en: string; pl: string };
  image: string;
  cases: singleCase[];
};

export interface IUseCase {
  useCases: UseCase[];
}

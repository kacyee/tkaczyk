export type singleCase = {
  name: string;
  url: string;
  hoverBgColor: string;
  hoverFontColor: string;
};

export type UseCase = {
  name: string;
  image: string;
  cases: singleCase[];
};

export interface IUseCase {
  useCases: UseCase[];
}

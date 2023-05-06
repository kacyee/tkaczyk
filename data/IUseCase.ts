type MultiLanguageField = {
  en: string;
  pl: string;
};

export type singleCase = {
  name: MultiLanguageField;
  url: MultiLanguageField;
  hoverBgColor: string;
  hoverFontColor: string;
};

export type UseCase = {
  name: MultiLanguageField;
  image: string;
  cases: singleCase[];
};

export interface IUseCase {
  useCases: UseCase[];
}

type MultiLanguageField = {
  en: string;
  pl: string;
};

export type ResponsiveUrl = {
  mobile: MultiLanguageField;
  desktop: MultiLanguageField;
  fullhd: MultiLanguageField;
};

export type singleCase = {
  name: MultiLanguageField;
  url: ResponsiveUrl;
  hoverBgColor: string;
  hoverFontColor: string;
};

export type UseCase = {
  ID: string;
  name: MultiLanguageField;
  image: string;
  cases: singleCase[];
};

export interface IUseCase {
  useCases: UseCase[];
}

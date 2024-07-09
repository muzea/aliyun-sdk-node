export interface GetDetectLanguageResponse {
    /**
     * 识别成功的语种
     * @example `zh`
     */
    DetectedLanguage: string;
    /**
     * 请求ID
     * @example `0C5EC1EC-1A06-4D60-97E6-4D41350945E4`
     */
    RequestId: string;
    LanguageProbabilities: string;
}

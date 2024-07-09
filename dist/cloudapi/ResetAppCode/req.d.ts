export interface ResetAppCodeRequest {
    /**
     * 应用的AppCode
     * @example `3aaf905a0a1f4f0eabc6d891dfa08afc`
     */
    "AppCode": string;
    /**
     * 新的应用AppCode。
     * @example `6f0e7ab2aa5f4b8fb18421e6edf4fb6c2`
     */
    "NewAppCode"?: string;
}

export interface CreateAppCodeRequest {
    /**
     * App的编号
     * @example `111203109`
     */
    "AppId": string;
    /**
     * 应用的APPCode编码
     * @example `3aaf905a0a1f4f0eabc6d891dfa08afc`
     */
    "AppCode"?: string;
}

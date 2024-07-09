export interface DeleteSensitiveWordRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 要删除敏感词列表。仅有被创建过的敏感词才会被正确删除。
     */
    "WordList"?: string[];
}

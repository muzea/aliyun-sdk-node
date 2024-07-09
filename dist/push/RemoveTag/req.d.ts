export interface RemoveTagRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 要删除的Tag名称。单次只能删除一个Tag。长度限制：不大于128字符。
     * @example `test_tag`
     */
    "TagName": string;
}

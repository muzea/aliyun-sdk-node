export interface GetAllCustomTemplatesResponse {
    /**
     * 模板名和模板配置列表。
     * @example ` [{"templateConfig": "{\"cdesc\":\"H264\",\"scale\":\"[3:4]\",\"gop\":\"1\",\"bframes\":\"1\",\"height\":\"1080\"}","templateName": "custom1"},{"templateConfig": "{\"ar\":\"44100\",\"cdesc\":\"H264\",\"scale\":\"[3:4]\",\"gop\":\"1\",\"bframes\":\"1\",\"height\":\"1080\"}","templateName": "cus"}]`
     */
    CustomTemplates: string;
    /**
     * 请求ID。
     * @example `4791648Q-813C-6254-865C-0ED913661230`
     */
    RequestId: string;
}

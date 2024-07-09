export interface UpdateHealthCheckUrlRequest {
    /**
     * 应用ID。
     * @example `c627c157-560d-43ff-***************`
     */
    "AppId": string;
    /**
     * 健康检查URL，需要以`http://`开头，最大长度不超过255字符，例如：`http://127.0.0.1:8080/_ehc.html`。不传该参数，可不修改应用检查URL。
     * @example `http://127.0.0.1:8080/_ehc.html`
     */
    "hcURL"?: string;
}

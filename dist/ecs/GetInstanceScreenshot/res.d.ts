export interface GetInstanceScreenshotResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `i-bp1gbz20g229bvu5****`
     */
    InstanceId: string;
    /**
     * JPG图像格式的实例截屏，返回Base64编码后的图像。
     * @example `iVBORw0KGgoA...AAABJRU5ErkJggg==`
     */
    Screenshot: string;
}

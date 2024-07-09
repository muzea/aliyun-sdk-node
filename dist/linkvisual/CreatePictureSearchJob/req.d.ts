export interface CreatePictureSearchJobRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `3e429560124b44b685095df81a27****`
     */
    "AppInstanceId": string;
    /**
     * 待检索图片的地址。
     * @example `http://xxx.xxx/1.jpg`
     */
    "SearchPicUrl": string;
    /**
     * 检索范围起始时间，格式为13位时间戳，单位为毫秒。
     * @example `1614227915000`
     */
    "StartTime": number;
    /**
     * 检索范围结束时间，格式为13位时间戳，单位为毫秒。
     * @example `1614327915000`
     */
    "EndTime": number;
    /**
     * 人脸检索阈值。取值范围为0~1。
     * 为保证检索结果的准确性，推荐设置该参数在0.3~0.6之间。
     * @example `0.5`
     */
    "Threshold": number;
    /**
     * 人体检索阈值。取值范围为0~1。
     * 为保证检索结果的准确性，推荐设置该参数大于等于0.8。若不设置，则取值为Threshold参数的值。
     * @example `0.9`
     */
    "BodyThreshold"?: number;
    /**
     * 检索类型：
     * - 1：人脸
     * - 0：人体
     * 默认为1。
     * @example `1`
     */
    "PictureSearchType"?: number;
}

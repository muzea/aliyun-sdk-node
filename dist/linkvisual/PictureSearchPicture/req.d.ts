export interface PictureSearchPictureRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `5a502d3fbab8410e8fd4be9037c7****`
     */
    "AppInstanceId": string;
    /**
     * 每页显示的条数。最大取值10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 待检索图片的地址。
     * @example ` http://***.***​/2393.jpg`
     */
    "SearchPicUrl": string;
    /**
     * 检索范围起始时间，格式为13位时间戳，单位为毫秒。
     * @example `1614297000000`
     */
    "StartTime": number;
    /**
     * 检索范围结束时间，格式为13位时间戳，单位为毫秒。
     * @example `1614850651299`
     */
    "EndTime": number;
    /**
     * 检索阈值。取值范围0~1。
     * > 建议设置检索阈值大于等于0.3，以保证与检测对象匹配。
     * @example `0.5`
     */
    "Threshold": number;
    /**
     * 响应结果包含照片。
     * > 当前设置为ture或false均返回响应结果。
     * @example `true`
     */
    "ContainPicUrl": boolean;
    /**
     * 检索类型：
     * - **1**（默认）：人脸
     * - **0**：人体
     * @example `1`
     */
    "PictureSearchType"?: number;
}

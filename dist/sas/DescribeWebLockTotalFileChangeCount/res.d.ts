export interface DescribeWebLockTotalFileChangeCountResponse {
    /**
     * 网页防篡统计文件被修改次数。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E70074C8-DFB4-44C5-96C7-909DD231D68A`
     */
    RequestId: string;
}

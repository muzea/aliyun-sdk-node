export interface DescribeTaskResponse {
    /**
     * 任务进度百分比。
     * @example `100`
     */
    Progress: number;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `8F8A2274-F2A5-5782-89A0-7FA442BFA16B`
     */
    RequestId: string;
    /**
     * 最后修改时间
     * @example `1636452195`
     */
    UpdatedTime: number;
    /**
     * 任务状态
     * @example `hdr.task.TestFailoverTask.waitStartFailover`
     */
    StatusCode: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 任务名称
     * @example `hdr.task.name.TestFailoverTask`
     */
    Name: string;
    /**
     * 任务ID
     * @example `t-000bzkmmlwh57miq4mwh`
     */
    TaskId: string;
    /**
     * 任务内容。
     * @example `-`
     */
    Content: string;
    /**
     * 创建时间
     * @example `1646100927`
     */
    CreatedTime: number;
}

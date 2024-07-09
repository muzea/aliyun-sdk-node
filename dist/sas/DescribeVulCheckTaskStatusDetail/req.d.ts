export interface DescribeVulCheckTaskStatusDetailRequest {
    /**
     * 任务ID列表。
     */
    "TaskIds"?: string[];
    /**
     * 一键扫描对应的漏洞类型列表。
     */
    "Types"?: string[];
    /**
     * 要查询的服务器的UUID。
     * @example `5d55af3c-35f3-4d4d-8ccc-8c5443b0****`
     */
    "Uuid"?: string;
}

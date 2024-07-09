export interface DescribeTasksRequest {
    /**
     * 命令执行ID，可以填写上一次操作返回的requestId。
     * @example `B8ED2BA9-0C6A-5643-818F-B5D60A64****`
     */
    "InvokeId"?: string;
    /**
     * 资源ID列表。
     */
    "ResourceIds"?: string[];
    /**
     * 任务ID列表。
     */
    "TaskIds"?: string[];
    /**
     * 任务类型。
     * @example `StartInstance`
     */
    "TaskType"?: string;
    /**
     * 任务状态。
     * @example `Processing`
     */
    "TaskStatus"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围 1～100，默认值为 10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****`
     */
    "NextToken"?: string;
}

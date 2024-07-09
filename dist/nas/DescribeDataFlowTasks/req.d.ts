export interface DescribeDataFlowTasksRequest {
    /**
     * 文件系统ID。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * - CPFS智算版：必须以`bmcpfs-`开头，例如bmcpfs-0015\*\*\*\*。
     * >仅中国站支持CPFS文件系统。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 筛选键的信息合集。
     */
    "Filters"?: {
        /**
         * 筛选键的名称。
         * 取值：
         * - DataFlowIds: 根据DataFlow ID筛选。
         * - TaskIds：根据数据流动任务的ID筛选。
         * - Originator：根据数据流动任务的发起者筛选。
         * - TaskActions：根据数据流动任务的类型筛选。
         * - DataTypes：根据数据流动任务的数据类型筛选。
         * - Status：根据数据流动状态筛选。
         * - CreateTimeBegin：筛选指定时间后创建的数据流动任务。
         * - CreateTimeEnd：筛选指定时间前创建的数据流动任务。
         * - StartTimeBegin：筛选指定时间后启动的数据流动任务。
         * - StartTimeEnd：筛选指定时间前启动的数据流动任务。
         * - EndTimeBegin：筛选指定时间后结束的数据流动任务。
         * - EndTimeEnd：筛选指定时间前结束的数据流动任务。
         * @example `DataFlowIds`
         */
        Key: string;
        /**
         * 筛选键的值。该参数不支持通配符。
         * - Key取值为DataFlowIds时，Value取值为数据流动ID或数据流动ID的一部分。可以是一个或一组DataFlowId，数据流动ID最多可设置10个。例如，`dfid-12345678`或`dfid-12345678,dfid-12345679`。
         * - 当Key取值为TaskId时，Value取值为数据流动任务ID或数据流动任务ID的部分。可以是一个或一组数据流动任务ID，数据流动任务ID最多可设置10个。例如，`task-12345678`或`task-12345678,task-12345679`。
         * - 当Key取值为TaskActions时，Value取值为数据流动的任务类型，包括**Import**，**Export**、**Evict**和**Inventory**。支持组合查询。
         * - 当Key取值为DataTypes时，Value取值为数据流动任务的数据类型，包括MetaAndData、Metadata和Data。支持组合查询。
         * - 当Key取值为Originator时，Value取值为数据流动任务的发起者，包括User，System。
         * - 当Key取值为Status时，Value取值为数据流动任务的状态，包括Pending、Executing、Failed、Completed、Canceling和Canceled。支持组合查询。
         * - 当Key取值为CreateTimeBegin时，Value取值为数据流动任务创建时间最小值。格式为`yyyy-MM-ddThh:mmZ`。
         * - 当Key取值为CreateTimeEnd时，Value取值为数据流动任务创建时间最大值。格式为`yyyy-MM-ddThh:mmZ`。
         * - 当Key取值为StartTimeBegin时，Value取值为数据流动任务启动时间最小值。格式为`yyyy-MM-ddThh:mmZ`。
         * - 当Key取值为StartTimeEnd时，Value取值为数据流动任务启动时间最大值。格式为`yyyy-MM-ddThh:mmZ`。
         * - 当Key取值为EndTimeBegin时，Value取值为数据流动任务结束时间最小值。格式为`yyyy-MM-ddThh:mmZ`。
         * - 当Key取值为EndTimeEnd时，Value取值为数据流动任务结束时间最大值。格式为`yyyy-MM-ddThh:mmZ`。
         * @example `dfid-12345678`
         */
        Value: string;
    }[];
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=`
     */
    "NextToken"?: string;
    /**
     * 每次查询结果的个数。
     * 取值范围：10~100。
     * 默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
}

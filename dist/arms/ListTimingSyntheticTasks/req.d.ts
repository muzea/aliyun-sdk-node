export interface ListTimingSyntheticTasksRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 搜索关键字
     */
    "Search"?: {
        /**
         * 查询的任务类型列表。
         */
        TaskTypes: number[];
        /**
         * 任务ID列表。
         */
        TaskIds: string[];
        /**
         * 任务名称。
         * @example `拨测`
         */
        Name: string;
        /**
         * CREATING：任务创建中， RUNNING：任务运行中， PARTIAL_RUNNING：任务部分运行中， STOP：任务停止， LIMIT_STOP：任务由于限额停止， EXCEPTION：任务异常， DELETE：任务删除， DELETE_EXCEPTION： 删除异常。
         * @example `CREATING`
         */
        Status: string;
        /**
         * 排序字段，支持按照gmtCreate、gmtModified、status和monitorCount其中之一排序。
         * @example `status`
         */
        OrderField: string;
        /**
         * 1:升序 -1:降序
         * @example `1`
         */
        Order: number;
        /**
         * 页码，必填。
         * @example `1`
         */
        Page: number;
        /**
         * 每页数量，必填。
         * @example `10`
         */
        PageSize: number;
    };
    /**
     * 资源组 ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签
     */
    "Tags"?: {
        /**
         * 标签的键(key)。
         * @example `mark`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `value1111`
         */
        Value: string;
    }[];
}

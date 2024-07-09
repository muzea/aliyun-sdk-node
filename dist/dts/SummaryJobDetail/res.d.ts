export interface SummaryJobDetailResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `9033138C-5AB3-5EB7-BA78-43131F19297C`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 迁移或同步任务ID。
     * @example `l3m1213ye7l****`
     */
    JobId: string;
    /**
     * 迁移对象数组返回信息。
     * > 数组返回格式如下：\[{"key":"Function","state":5,"totalCount":22},{"key":"Procedure","state":5,"totalCount":26},{"key":"Table","state":0,"totalCount":68},{"key":"View","state":5,"totalCount":100}]。
     */
    ProgressSummaryDetails: {
        /**
         * 迁移对象类型，返回值：**Table**（表）、**Constraint**（约束）、**Index**（索引）、**View**（视图）、**Materialize View**（物化视图）、**Type**（自定义类型）、**Synonym**（同义词）、**Trigger**（触发器）、**Function**（函数）、**Procedure**（存储过程）、**Package**（包）、**Default**（默认值）、**Rule**（规则）、**PlanGuide**（执行计划）、**Sequence**（序列）。
         * @example `Table`
         */
        Key: string;
        /**
         * 迁移对象总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 迁移状态，返回值：
         * - **0**：finish（结束）。
         * - **1**：catched（等待同步）。
         * - **2**：init（初始化）。
         * - **3**：running（同步中）。
         * - **4**：warning（报错）。
         * - **5**：failed（失败）。
         * @example `0`
         */
        State: number;
    }[];
}

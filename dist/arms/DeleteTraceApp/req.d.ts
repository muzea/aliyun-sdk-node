export interface DeleteTraceAppRequest {
    /**
     * 需要删除的应用的ID，可调用SearchTraceAppByName接口获取。
     * @example `5406**`
     */
    "AppId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要删除的应用的类型，可调用SearchTraceAppByName接口获取，更多信息，请参见**SearchTraceAppByName**。包括以下类型：
     * - `TRACE`：应用监控
     * - `RETCODE`：前端监控
     * @example `TRACE`
     */
    "Type": string;
    /**
     * 应用ID。
     * 在ARMS控制台的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `9w0sc5gxxz@edcsd447c2f****`
     */
    "Pid": string;
    /**
     * 删除原因。
     */
    "DeleteReason"?: {
        /**
         * 其他删除原因的备注信息。
         * @example `业务场景覆盖不全`
         */
        Remark: string;
        /**
         * 删除原因ID。
         */
        ReasonIds: {
            /**
             * 删除理由的ID。
             * @example `0`
             */
            Id: number;
            /**
             * 删除理由描述。
             * @example `删除理由描述，ID和Name的对应关系：
            "id":0,"name":"功能不完善，无法定位到问题根本原因。"
            "id":1,"name":"Agent不稳定，影响应用运行。"
            "id":2,"name":"服务不稳定，经常打不开界面。"
            "id":3,"name":"报警相关问题。"
            "id":4,"name":"价格太贵"
            "id":5,"name":"其他原因"`
             */
            Name: string;
        }[];
    };
}

export interface DescribeDrdsDBResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `58FB0EC7-CF71-4E48-92FB-CF070D******`
     */
    RequestId: string;
    /**
     * 数据库详情。
     */
    Data: {
        /**
         * 数据库状态，取值范围如下：
         * * **TO_BE_INIT**：创建中
         * * **NORMAL**：运行中
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 数据库名称。
         * @example `db_test`
         */
        DbName: string;
        /**
         * 数据库物理名。
         * @example `db_test*******************`
         */
        Schema: string;
        /**
         * 数据库创建的时间点，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1602050276000`
         */
        CreateTime: string;
        /**
         * 数据库拆分方式，取值范围如下：
         * * **HORIZONTAL**：水平拆分
         * * **VERTICAL**：垂直拆分
         * @example `HORIZONTAL`
         */
        Mode: string;
        /**
         * 数据库的存储类型。
         * @example `RDS`
         */
        DbInstType: string;
        /**
         * 数据库所属的实例类型，取值范围如下：
         * * **MASTER**：主实例
         * * **SLAVE**：只读实例
         * @example `MASTER`
         */
        InstRole: string;
    };
}

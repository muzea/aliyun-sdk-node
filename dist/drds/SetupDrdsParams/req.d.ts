export interface SetupDrdsParamsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drdsjiii1b49****`
     */
    "DrdsInstanceId": string;
    /**
     * 参数设置的级别。取值范围如下：
     * - **NSTANCE**：实例级
     * - **DB**：数据库级
     * @example `DB`
     */
    "ParamLevel": string;
    /**
     * 参数列表。
     */
    "Data": {
        /**
         * 参数对应的数据库名称。
         * @example `test_db`
         */
        DbName: string;
        /**
         * 参数类型，取值范围如下：
         * - **ATOM**：三层数据源中的配置项；
         * - **CONFIG**：Server Config中的配置项；
         * - **DIAMOND**：Diamond中的配置项。
         * @example `ATOM`
         */
        ParamType: string;
        /**
         * 参数值。
         * @example `true`
         */
        ParamValue: string;
        /**
         * 参数名称。
         * @example `FORBID_EXECUTE_DML_ALL`
         */
        ParamVariableName: string;
        /**
         * 参数取值范围。
         * @example `[true|false]`
         */
        ParamRanges: string;
    }[];
}

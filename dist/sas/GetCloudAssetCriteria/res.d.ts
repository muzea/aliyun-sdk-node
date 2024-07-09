export interface GetCloudAssetCriteriaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 云产品资产支持检索项信息列表。
     */
    CriteriaList: {
        /**
         * 查询条件的类型。取值：
         * - **input**：需要手动输入查询字段。
         * - **select**：需要从下拉列表中选择查询条件的子类型。
         * @example `select`
         */
        Type: string;
        /**
         * 查询条件的名称。
         * - **instanceId**：实例ID。
         * - **instanceName**：实例名称。
         * - **internetIp**：公网IP。
         * - **riskStatus**：风险状态。
         * - **vendorRegionId**：按厂商分类RegionId。
         * @example `instanceId`
         */
        Name: string;
        /**
         * **Type**（查询条件的类型）为**select**（选择型）时，可选项的值。
         * > **Type**（查询条件的类型）为**input**（输入型）时，该参数返回值为空。
         * @example `fvt*`
         */
        Values: string;
        /**
         * 输入的模糊匹配值对应的资产的具体结构化属性值。JSON格式，包含以下字段：
         * - **vendor**：供应商
         * - **regionIds**：支持地域
         * @example `[{"vendor":0,"regionIds":{"default":["ap-southeast-1","ap-northeast-2","ap-southeast-3","ap-southeast-5","ap-southeast-7","me-central-1"]}},{"vendor":1,"regionIds":{"default":["outside-of-aliyun"]}}]`
         */
        MultiValues: string;
    }[];
}

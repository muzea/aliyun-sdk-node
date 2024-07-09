export interface QueryDeviceGroupListRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 每页记录数。最大值是200。默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 父组ID。查询某父组下的子分组列表时，需传入此参数。
     * @example `8vDubXr4nUvZkNgk9mle010200`
     */
    "SuperGroupId"?: string;
    /**
     * 分组名称。
     * - 传入分组名称，则根据名称进行查询。不支持分组名称模糊查询。
     * - 若不传入此参数，则进行全量分组查询。
     * @example `GroupName1`
     */
    "GroupName"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 待查询的分组类型。
     * 目前仅支持传入一个，且为**LINK_PLATFORM_DYNAMIC**，表示动态分组。不传入时，默认为静态分组。
     * @example `LINK_PLATFORM_DYNAMIC`
     */
    "GroupTypes"?: string[];
}

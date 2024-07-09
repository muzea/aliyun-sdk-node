export interface QueryEdgeDriverVersionRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 返回结果中每页显示的记录数量。最大取值30，最小取值1，默认取值是10。
     * @example `15`
     */
    "PageSize": number;
    /**
     * 从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 驱动ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**驱动管理**页面中，鼠标悬浮在目标驱动名称上获取ID。
     * 您也可以调用[QueryEdgeDriver](~~155776~~)接口获取。
     * @example `fec565038d7544978d9aed5c1a******`
     */
    "DriverId": string;
    /**
     * 驱动版本号。设置该参数表示仅查询该版本号匹配的驱动版本信息。
     * @example `led驱动`
     */
    "DriverVersion"?: string;
    /**
     * 驱动版本状态。
     * - 0：表示查询未发布的驱动版本。
     * - 1：表示查询已发布的驱动版本。
     * @example `0`
     */
    "VersionState"?: number;
}

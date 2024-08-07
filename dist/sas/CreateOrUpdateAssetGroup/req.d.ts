export interface CreateOrUpdateAssetGroupRequest {
    /**
     * 要创建或修改的服务器分组下的服务器的UUID。多个UUID使用半角逗号（,）分隔。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `aq12-***,s23***`
     */
    "Uuids"?: string;
    /**
     * 要创建或修改服务器列表的服务器分组名称。
     * > 修改服务器与服务器分组关系时，需要提供待修改服务器分组的名称，该名称可调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取。 如果请求参数未输入GroupId，调用该接口会创建新的资产分组，此时必须输入该参数。
     * @example `test`
     */
    "GroupName"?: string;
    /**
     * 要修改服务器列表的服务器分组ID。
     * > 修改资产与资产分组关系时，需要提供待修改资产分组的ID，该ID可调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取。如果不输入此参数，调用该接口会创建一个新的资产分组。
     * @example `55426`
     */
    "GroupId"?: number;
}

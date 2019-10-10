interface ModifyGlobalAccelerationInstanceAttributesRequest {
    /**
    * 全球加速实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  全球加速实例的ID。
    * @example `ga-14fdsf3****`
    */ "GlobalAccelerationInstanceId": string;
    "OwnerId"?: number;
    /**
    * 全球加速实例的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `GA-1`
    */ "Name"?: string;
    /**
    * 全球加速实例的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `My GA`
    */ "Description"?: string;
}
export { ModifyGlobalAccelerationInstanceAttributesRequest };
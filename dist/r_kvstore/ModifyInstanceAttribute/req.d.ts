interface ModifyInstanceAttributeRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-j6cxxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 新的实例名称。名称为2-80个字符，以大小写英文字母或中文开头，不支持字符`@/:=”<>{[]}`和空格。
    * @example `newinstancename`
    */ "InstanceName"?: string;
    /**
    * 新的实例密码。长度为8-32位，需包含大写字母、小写字母、数字、特殊字符（支持`!@#$%^&*()_+-=`）中至少三种。
    * @example `uW8+nsrp`
    */ "NewPassword"?: string;
}
export { ModifyInstanceAttributeRequest };
interface ModifyCenAttributeRequest {
    "RegionId"?: string;
    /**
    *  云企业网实例的ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    "OwnerId"?: number;
    /**
    * 云企业网实例的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    * 云企业网实例的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `cen`
    */ "Description"?: string;
    /**
    * 设置网段重叠冲突的级别，取值：
    * - **FULL**：不能有网段重叠。
    * - **REDUCE**：可以有网段重叠，但是不能完全相等。
    * @example `FULL`
    */ "ProtectionLevel"?: string;
}
export { ModifyCenAttributeRequest };
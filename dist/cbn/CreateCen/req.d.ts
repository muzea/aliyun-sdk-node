interface CreateCenRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII 字符。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 云企业网实例的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    * 云企业网实例的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `云企业网`
    */ "Description"?: string;
    /**
    * 设置网段重叠冲突的级别，取值：
    * - **FULL**：不能有网段重叠。
    * - **REDUCE**：可以有网段重叠，但是不能完全相等。
    * @example `FULL`
    */ "ProtectionLevel"?: string;
}
export { CreateCenRequest };
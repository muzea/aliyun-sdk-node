interface ModifyEipAddressAttributeRequest {
    /**
    * 路由表所属的VPC的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    *  EIP的带宽峰值，单位为Mbps。
    * @example `100`
    */ "Bandwidth"?: string;
    /**
    *  弹性公网IP的ID。
    * @example `eip-2zeerraiwb7uj6i0d0fo3`
    */ "AllocationId": string;
    /**
    *  EIP的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `Test123`
    */ "Name"?: string;
    /**
    *  EIP的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `描述`
    */ "Description"?: string;
}
export { ModifyEipAddressAttributeRequest };
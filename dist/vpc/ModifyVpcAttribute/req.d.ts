interface ModifyVpcAttributeRequest {
    /**
    * VPC的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * VPC的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `This is my VPC.`
    */ "Description"?: string;
    /**
    * VPC的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `Vpc-1`
    */ "VpcName"?: string;
    /**
    * VPC的网段，支持将VPC网段在10.0.0.0/8、172.16.0.0/12和192.168.0.0/16以及它们的子网范围内放大或缩小，网段的掩码为8~24位。
    * @example `192.168.0.0/24`
    */ "CidrBlock"?: string;
    /**
    *  VPC的ID。
    * @example `vpc-bp1qtbach57ywecf****`
    */ "VpcId": string;
    /**
    * 是否开启IPv6网段。
    * - **true**：开启。
    * - **false**：关闭。
    * @example `true`
    */ "EnableIPv6"?: boolean;
}
export { ModifyVpcAttributeRequest };
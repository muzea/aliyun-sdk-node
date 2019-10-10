interface CreateCloudConnectNetworkRequest {
    /**
    *  云连接网的所属区域。取值： cn-shanghai：中国大陆
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 是否默认创建。
    * 如果客户没有ccn在绑定时，会给用户默认创建一个ccn。
    * @example `false`
    */ "IsDefault": boolean;
    /**
    * 云连接网的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或 `https://`开头。
    * @example `ccn名称`
    */ "Name"?: string;
    /**
    * 云连接网的描述。
    * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或 `https://`开头。
    * @example `ccn描述`
    */ "Description"?: string;
    /**
    * 私网网段。
    * @example `172.16.22.0/24`
    */ "CidrBlock"?: string;
    /**
    * SNAT内网网段。
    * @example `172.16.22.3/24`
    */ "SnatCidrBlock"?: string;
}
export { CreateCloudConnectNetworkRequest };
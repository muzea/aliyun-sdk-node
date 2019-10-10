interface CreateFabricChaincodeRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 通道ID
    * @example `chan-first-channel-1w55v3u39x2xz`
    */ "ChannelId": string;
    /**
    * 联盟ID
    * @example `consortium-aaaaaa-akpcsjjac2jd`
    */ "ConsortiumId": string;
    /**
    * Oss桶地址
    * @example `https://chaincode.oss-cn-beijing.aliyuncs.com`
    */ "OssBucket": string;
    /**
    * Oss对象地址
    * @example `aaaaaa1/a0cf8729-7d47-44c9-9ed5-6d2fdfc8dc2c/sacc.cc`
    */ "OssUrl": string;
    /**
    * 组织ID
    * @example `peers-aaaaaa1-1oxw31d046jtl`
    */ "OrganizationId": string;
    /**
    * 背书策略
    * @example `OR ('aaaaaa1MSP.peer')`
    */ "EndorsePolicy"?: string;
    /**
    * 位置信息
    * @example `cn-hangzhou`
    */ "Location"?: string;
}
export { CreateFabricChaincodeRequest };
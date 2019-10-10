interface DescribeKeyPairsRequest {
    /**
    * 密钥对所在的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 密钥对名称。支持正则表达式模糊搜索，使用*匹配子表达式，示例：
    * - `*SshKey`：查询以SshKey结尾的密钥对名称，包括SshKey。
    * - `SshKey*`：查询以SshKey开头的密钥对名称，包括SshKey。
    * - `*SshKey*`：查询名称中间有SshKey的密钥对，包括SshKey。
    * - `SshKey`：精确匹配SshKey。
    * @example `*Finance*`
    */ "KeyPairName"?: string;
    /**
    * 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。更多详情，请参见[RFC4716](https://tools.ietf.org/html/rfc4716)。
    * @example `XXXXXXXXXX`
    */ "KeyPairFingerPrint"?: string;
    /**
    * 密钥对列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    "Tag"?: string[];
    /**
    * 密钥对所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
}
export { DescribeKeyPairsRequest };
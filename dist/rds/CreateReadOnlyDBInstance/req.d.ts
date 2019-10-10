interface CreateReadOnlyDBInstanceRequest {
    /**
    * 地域ID。只读实例的地域必须和主实例相同。可以通过接口[DescribeRegions](~~26243~~)查看地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 可用区ID。可以通过接口[DescribeRegions](~~26243~~)查看可用区列表。
    * @example `cn-hangzhou-b`
    */ "ZoneId": string;
    /**
    * 主实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 实例规格，详见[实例规格表](~~26312~~)。建议只读实例规格不小于主实例规格，否则易导致只读实例延迟高、负载高等现象。
    * @example `rds.mys2.small`
    */ "DBInstanceClass": string;
    /**
    * 存储空间，取值：**5-3000**，每5GB进行递增，单位：GB。
    * >不同版本实例，支持的取值范围不同，请以控制台创建只读实例页面为准。
    * @example `20`
    */ "DBInstanceStorage": number;
    /**
    * 数据库版本号。必须与主实例相同。取值：
    * * **5.6**
    * * **5.7**
    * * **8.0**
    * * **2017_ent**
    * @example `5.6`
    */ "EngineVersion": string;
    /**
    * 付费类型，仅支持按量付费，取值：**Postpaid**。
    * @example `Postpaid`
    */ "PayType": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 实例描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
    * >不能以 http:// 和 https:// 开头。
    * @example `测试只读实例`
    */ "DBInstanceDescription"?: string;
    /**
    * 实例的网络类型，取值：
    * * **VPC**：VPC网络；
    * * **Classic**：经典网络。
    * 默认创建经典网络实例。
    * @example `Classic`
    */ "InstanceNetworkType"?: string;
    /**
    * VPC ID。
    * @example `vpc-uf6f7l4fg90xxxxxxxxxx`
    */ "VPCId"?: string;
    /**
    * 交换机ID。
    * @example `vsw-uf6adz52c2pxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 设置只读实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
    * @example `172.16.201.69`
    */ "PrivateIpAddress"?: string;
    /**
    * 资源组ID。
    * @example `rg-acfmyxxxxxxxxxx`
    */ "ResourceGroupId"?: string;
    /**
    * 实例系列，取值：
    * * **Basic**：基础版；
    * * **HighAvailability**：高可用版；
    * * **AlwaysOn**：集群版；
    * * **Finance**：金融版（仅中国站支持）。
    * @example `HighAvailability`
    */ "Category"?: string;
    /**
    * 实例储存类型，取值：
    * * **local_ssd**​/**ephemeral_ssd**：本地SSD盘；
    * * **cloud_ssd**：SSD云盘；
    * * **cloud_essd**：ESSD云盘。
    * >MySQL仅支持本地盘存储类型，SQL Server仅支持云盘存储类型。
    * @example `local_ssd`
    */ "DBInstanceStorageType"?: string;
}
export { CreateReadOnlyDBInstanceRequest };
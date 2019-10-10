interface CreateImageRequest {
    /**
    * 镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    "DiskDeviceMapping"?: string[];
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 根据指定的快照创建自定义镜像。
    * @example `s-snapshotid`
    */ "SnapshotId"?: string;
    /**
    * 实例ID。
    * @example `i-instanceid`
    */ "InstanceId"?: string;
    /**
    * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `FinanceDeptJoshuaCentOS`
    */ "ImageName"?: string;
    /**
    * @example `2017011017`
    */ "ImageVersion"?: string;
    /**
    * 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * 默认值：空。
    * @example `FinanceDeptjoshua`
    */ "Description"?: string;
    /**
    * 指定数据盘快照做镜像的系统盘后，需要通过Platform确定系统盘的的操作系统发行版。取值范围：
    * - CentOS
    * - Ubuntu
    * - SUSE
    * - OpenSUSE
    * - RedHat
    * - Debian
    * - CoreOS
    * - Aliyun Linux
    * - Windows Server 2003
    * - Windows Server 2008
    * - Windows Server 2012
    * - Windows 7
    * - Others Linux（默认）
    * - Customized Linux
    * @example `CentOS`
    */ "Platform"?: string;
    /**
    * 指定数据盘快照做镜像的系统盘后，需要通过Architecture确定系统盘的系统架构。取值范围：
    * - i386
    * - x86_64（默认）
    * @example `x86_64`
    */ "Architecture"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    "Tag"?: string[];
    /**
    * 自定义镜像所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
}
export { CreateImageRequest };
interface ImportImageRequest {
    /**
    * 源自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    "DiskDeviceMapping"?: string[];
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `FinanceJoshua`
    */ "ImageName"?: string;
    /**
    * 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * 默认值：空。
    * @example `FinanceDeptJoshua`
    */ "Description"?: string;
    /**
    * 系统架构。取值范围：
    * - i386
    * - x86_64（默认）
    * @example `x86_64`
    */ "Architecture"?: string;
    /**
    * 操作系统平台类型。取值范围：
    * - windows
    * - linux（默认）
    * @example `linux`
    */ "OSType"?: string;
    /**
    * 操作系统发行版。取值范围：
    * -   CentOS
    * -   Ubuntu
    * -   SUSE
    * -   OpenSUSE
    * -   Debian
    * -   CoreOS
    * -   Aliyun
    * -   Windows Server 2003
    * -   Windows Server 2008
    * -   Windows Server 2012
    * -   Others Linux（默认）
    * -   Customized Linux
    * @example `Aliyun`
    */ "Platform"?: string;
    /**
    * @example `FinanceJoshua`
    */ "RoleName"?: string;
    /**
    * 导入镜像后，激活操作系统采用的许可证类型。取值范围：
    * - Auto（默认）：由阿里云检测源操作系统并分配许可证。自动模式下，系统优先搜索您设置的`Platform`是否有阿里云官方渠道的许可证并分配给导入的镜像，如果缺乏该类许可，会切换成BYOL（Bring Your Own License）方式。
    * - Aliyun：根据您设置的`Platform`采用阿里云官方渠道的许可证。
    * - BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。
    * @example `Auto`
    */ "LicenseType"?: string;
}
export { ImportImageRequest };
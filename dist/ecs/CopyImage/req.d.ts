interface CopyImageRequest {
    /**
    * 源自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 源自定义镜像的ID。
    * @example `m-imageid1`
    */ "ImageId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 复制后的镜像的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `FinanceJoshua`
    */ "DestinationImageName"?: string;
    /**
    * 目标镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * 默认值：空。
    * @example `FinanceDept`
    */ "DestinationDescription"?: string;
    /**
    * 复制到目标地域的ID。
    * @example `cn-shanghai`
    */ "DestinationRegionId"?: string;
    "Tag"?: string[];
    /**
    * 是否加密镜像。
    * @example `false`
    */ "Encrypted"?: boolean;
    "KMSKeyId"?: string;
}
export { CopyImageRequest };
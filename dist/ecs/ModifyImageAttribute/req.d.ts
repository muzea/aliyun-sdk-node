interface ModifyImageAttributeRequest {
    /**
    * 自定义镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 自定义镜像的ID。
    * @example `m-imageid1`
    */ "ImageId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 自定义镜像的名称。能包含2~128个字符。必须以大小字母或中文开头，可包含数字、半角冒号（:）、下划线（_）或者连字符（-）。不能以http://和https://开头。
    * 默认值：空，表示保持原有名称不变。
    * @example `FinanceJoshua`
    */ "ImageName"?: string;
    /**
    * 自定义镜像的描述信息。能包含0~256个字符。不能以http://和https://开头。
    * 默认值：空，表示保持原有描述信息不变。
    * @example `FinanceDept`
    */ "Description"?: string;
}
export { ModifyImageAttributeRequest };
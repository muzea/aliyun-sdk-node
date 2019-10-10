interface ValidateTemplateRequest {
    /**
    * 资源栈模板所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `oss://ros/template/demo`
    */ "TemplateURL"?: string;
    /**
    * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
    */ "TemplateBody"?: string;
}
export { ValidateTemplateRequest };
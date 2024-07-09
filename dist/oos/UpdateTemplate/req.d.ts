export interface UpdateTemplateRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符，且不能以ALIYUN、ACS、ALIBABA、ALICLOUD开头。
     * @example `MyTemplate`
     */
    "TemplateName": string;
    /**
     * 模板内容。JSON或YAML格式，长度限制为 64 KB。
     * @example `{
      "FormatVersion": "OOS-2019-06-01",
      "Description": {
        "en": "Bulky starts the ECS instances",
        "zh-cn": "批量启动ECS实例",
        "name-en": "Bulky Start Instances",
        "name-zh-cn": "批量启动实例"
      },
      "Parameters": {
        "regionId": {
          "Type": "String",
          "Label": {
            "en": "RegionId",
            "zh-cn": "地域ID"
          },
          "AssociationProperty": "RegionId",
          "Default": "{{ ACS::RegionId }}"
        },
        "targets": {
          "Type": "Json",
          "Label": {
            "en": "TargetInstance",
            "zh-cn": "目标实例"
          },
          "AssociationProperty": "Targets",
          "AssociationPropertyMetadata": {
            "ResourceType": "ALIYUN::ECS::Instance",
            "RegionId": "regionId"
          }
        },
        "rateControl": {
          "Label": {
            "en": "RateControl",
            "zh-cn": "任务执行的并发比率"
          },
          "Type": "Json",
          "AssociationProperty": "RateControl",
          "Default": {
            "Mode": "Concurrency",
            "MaxErrors": 0,
            "Concurrency": 10
          }
        },
        "OOSAssumeRole": {
          "Label": {
            "en": "OOSAssumeRole",
            "zh-cn": "OOS扮演的RAM角色"
          },
          "Type": "String",
          "Default": "OOSServiceRole"
        }
      },
      "RamRole": "{{ OOSAssumeRole }}",
      "Tasks": [
        {
          "Name": "getInstance",
          "Description": {
            "en": "Views the ECS instances",
            "zh-cn": "获取ECS实例"
          },
          "Action": "ACS::SelectTargets",
          "Properties": {
            "ResourceType": "ALIYUN::ECS::Instance",
            "RegionId": "{{ regionId }}",
            "Filters": [
              "{{ targets }}"
            ]
          },
          "Outputs": {
            "instanceIds": {
              "Type": "List",
              "ValueSelector": "Instances.Instance[].InstanceId"
            }
          }
        },
        {
          "Name": "startInstance",
          "Action": "ACS::ECS::StartInstance",
          "Description": {
            "en": "Starts the ECS instances",
            "zh-cn": "启动实例"
          },
          "Properties": {
            "regionId": "{{ regionId }}",
            "instanceId": "{{ ACS::TaskLoopItem }}"
          },
          "Loop": {
            "RateControl": "{{ rateControl }}",
            "Items": "{{ getInstance.instanceIds }}"
          }
        }
      ],
      "Outputs": {
        "instanceIds": {
          "Type": "List",
          "Value": "{{ getInstance.instanceIds }}"
        }
      }
    }`
     */
    "Content": string;
    /**
     * 标签键及值，键值对数量限制为1至20。
     * @example `{"k1":"k2","k2":"v2"}`
     */
    "Tags"?: any;
    /**
     * 模版版本名称。
     * @example `v2`
     */
    "VersionName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}

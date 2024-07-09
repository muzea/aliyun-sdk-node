export interface CreateServiceRequest {
    /**
     * 请求body。其中关键请求参数配置说明，请参见下方的**表 1. 请求 Body 参数**和**表 2. metadata 参数**。更多参数配置详情，请参见[服务模型所有相关参数说明](~~450525~~)。
     * @example `镜像部署服务：
    {
      "name": "foo",
      "metadata": {
        "instance": 2,
        "memory": 7000,
        "cpu": 4
        },
      "containers": [
        {
          "image": "****",
          "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
          "port": 8000
        }
      ],
      "storage": [
        {
          "oss": {
            "path": "oss://examplebuket/data111/",
            "readOnly": false
          },
          "properties": {
            "resource_type": "model"
          },
          "mount_path": "/data"
        }
      ]
    }
    镜像部署AI-Web应用：
    {
      "name": "foo",
      "metadata": {
        "instance": 1,
        "memory": 7000,
        "cpu": 4,
        "enable_webservice": true
      },
      "containers": [
        {
          "image": "****",
          "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
          "port": 8000
        }
      ],
      "storage": [
        {
          "oss": {
            "path": "oss://examplebucket/data111/",
            "readOnly": false
          },
          "properties": {
          "resource_type": "model"
          },
          "mount_path": "/data"
        }
      ]
    }
    模型+processor部署服务：
    {
      "metadata": {
        "instance": 1,
        "memory": 7000,
        "cpu": 4
      },
      "name": "foo",
      "model_config": {},
      "processor_type": "python",
      "processor_path": "oss://****",
      "processor_entry": "a.py",
      "model_path": "oss://****"
    }`
     */
    "body"?: string;
    /**
     * 是否进入开发模式。
     * @example `true`
     */
    "Develop"?: string;
    /**
     * 用户自定义标签。
     */
    "Labels"?: any;
    /**
     * 工作空间ID。
     * @example `123456`
     */
    "WorkspaceId"?: string;
}

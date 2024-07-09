export interface RevokeTokenRequest {
    /**
     * 您需要吊销的Token。
     * @example `LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==`
     */
    "Token": string;
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。该实例ID在[控制台](https://mqtt.console.aliyun.com/)**实例详情**页面获取。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
}

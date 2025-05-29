GS.dataCache['369AE0414741C345E138E04636A751526E6E'] = {
    "uid": "369AE0414741C345E138E04636A751526E6E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Scene 5 Neutral Ending",
        "type": "vn.scene",
        "parentId": "B87801FC0A24214FB509DEE7D367F66DB429",
        "chapterUid": "B87801FC0A24214FB509DEE7D367F66DB429",
        "order": 9,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "Playful_-_Kidding_Around.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1E2A537334258249582AF371B5BC5EAAC3CB",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "image1.png",
                        "folderPath": "Graphics/Backgrounds/Scene 5 Neutral Ending",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "185A5DAB158E904799891028675AA080E993",
                "indent": 0
            },
            {
                "id": "gs.WaitForInput",
                "params": {
                    "key": 132,
                    "state": 1,
                    "inputSession": 0,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "$$C50EA7EF0592134BEF59E098BD7961D34EB4",
                            "commonEventId": 0
                        }
                    }
                },
                "uid": "7D20F61812584545A0783794E3390F7EC99E",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4F2B989B9694C741493B6DA40EC94FF93F27",
                        "name": "Credits"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "7458915E198347451728AAB2898C62FCBCAA",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}
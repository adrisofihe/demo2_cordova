/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready



        document.addEventListener("deviceready", onDeviceReady, false);

        // Función de deviceready, se ejecuta cuando el dispositivo está listo
        function onDeviceReady() {
            // Agrega un listener para el evento de cambio de estado de la batería
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }

        // Función de cambio de estado de la batería
        function onBatteryStatus(status) {
            // Nivel de batería en porcentaje
            var level = status.level;

            // Estado de la conexión a la fuente de alimentación (true = conectado, false = desconectado)
            var isPlugged = status.isPlugged;

            // Actualiza  con la información de la batería
            document.getElementById("battery-level").textContent = "Nivel de bateria: " + level + "%";
            document.getElementById("power-source").textContent = "Fuente de alimentacion: " + (isPlugged ? "Conectado" : "Desconectado");
        }

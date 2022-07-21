import React from "react";
import { VscBook } from "react-icons/vsc";
import { BsInfoCircleFill } from "react-icons/bs";


import { MdKeyboardArrowLeft, MdKeyboardArrowRight ,MdViewColumn,MdFileDownload,MdFilterList} from "react-icons/md";

const Useridentify = () => {
  return (
    <div>
      <div className="identification-header">
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <p class=" normal-case text-2xl font-medium">
              Identificação da pessoa
            </p>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0 space-x-4 text-[#084f87] font-semibold">
              <button className="border px-4 py-2.5 flex items-center space-x-1 ">
                <span>
                  <VscBook size={24} />
                </span>{" "}
                <span>Catálogo</span>
              </button>
              <button className="border px-4 py-2.5 "> Fechar</button>
            </ul>
          </div>
        </div>
      </div>
      {/* information*/}
      <div className="information-1 mt-10  mx-4 rounded-xl   border">
        <p className="text-xl px-4 py-6 border-b font-semibold ">
          Informação IMT
        </p>

        <div class="overflow-x-auto relative py-6">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-500/90 uppercase  ">
              <tr>
                <th scope="col" class="py-3 px-4">
                  Nome Próprio{" "}
                </th>
                <th scope="col" class="py-3 px-6">
                  Apelido
                </th>
                <th scope="col" class="py-3 px-6">
                  Local de Nascimento
                </th>
                <th scope="col" class="py-3 px-6">
                  Data de Nascimento
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white text-black text-base ">
                <th
                  scope="row"
                  class="py-2 px-4 font-normal  whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-2 px-6">Sliver</td>
                <td class="py-2 px-6">Laptop</td>
                <td class="py-2 px-6">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="information-2 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Coimas em atraso</p>
          <div className="flex items-center space-x-4 text-white text-base">
            <button className="border px-4 py-2 bg-[#084f87] flex items-center space-x-2 ">
              <span>
                <VscBook size={24} />
              </span>{" "}
              <span>Emitir selecionadas</span>
            </button>
            <button className="border px-4  bg-[#084f87] py-2 flex items-center space-x-2 ">
              <span>
                <VscBook size={24} />
              </span>{" "}
              <span>Pagar selecionadas</span>
            </button>
          </div>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg py-6">
          <table class="w-full text-sm font-normal text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class=""></th>
                <th scope="col" class="py-4 pr-8 ">
                  Data
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Nº auto
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Cód. Infração
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Valor Coima
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Custas do Processo
                </th>
                <th scope="col" class=" py-4 pr-8 pl-2 border-l">
                  Total
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white borde-t  dark:bg-gray-800 dark:border-gray-700 text-base hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-4">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="checkbox h-7 w-7 checkbox-primary"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class=" font-normal py-6 whitespace-nowrap dark:text-white"
                >
                  2016-05-05
                </th>
                <td class="py-6 pr-10 pl-2">183050015</td>
                <td class="py-6 pr-10 pl-2">123</td>
                <td class="py-6 pr-10 pl-2">49,00</td>
                <td class="py-6 pr-10 pl-2">12,00</td>
                <td class="py-6 pr-10 pl-2 bg-yellow-500 text-white">61,00</td>
                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
              <tr class="bg-white border-y  dark:bg-gray-800 dark:border-gray-700 text-base hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-4">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="checkbox h-7 w-7 checkbox-primary"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class=" font-normal py-6 whitespace-nowrap dark:text-white"
                >
                  2016-05-05
                </th>
                <td class="py-6 pr-10 pl-2">183050015</td>
                <td class="py-6 pr-10 pl-2">123</td>
                <td class="py-6 pr-10 pl-2">49,00</td>
                <td class="py-6 pr-10 pl-2">12,00</td>
                <td class="py-6 pr-10 pl-2 bg-yellow-500 text-white">61,00</td>
                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>
      <div className="information-3 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Sanções acessórias</p>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg  py-6">
          <table class="w-full text-sm font-normal text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class="py-4 pl-4 pr-8 ">
                  Auto
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Coding process
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Tribunal
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  junizo
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  total
                </th>
                <th scope="col" class=" py-4 pr-8 pl-2 border-l">
                  Carta Entr
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-y  dark:bg-gray-800 dark:border-gray-700 text-base hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal pl-4 py-6 whitespace-nowrap dark:text-white"
                >
                  0123
                </th>
                <td class="py-6 pr-10 pl-2">99/17.OPFVNG</td>
                <td class="py-6 pr-10 pl-2">
                  30374-VILA NOVA DE GAIA-Local Criminal
                </td>
                <td class="py-6 pr-10 pl-2">3</td>
                <td class="py-6 pr-10 pl-2"></td>
                <td class="py-6 pr-10 pl-2  "></td>
                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>
      <div className="information-4 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Documentos apreendidos</p>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg  py-6">
          <table class="w-full text-sm font-normal text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class="py-4 pl-4 pr-8 ">
                  Documento
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Estado
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Localização de documento
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal pl-4 py-6 whitespace-nowrap dark:text-white"
                >
                  504295 - Carta de Condução, P-10552041, titular: João Pinto
                </th>
                <td class="py-6 pr-10 pl-2">A</td>
                <td class="py-6 pr-10 pl-2">
                  DIVISÃO DE TRÂNSITO E SEGURANÇA RODOVIÁRIA﻿
                </td>

                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>

      <div className="information-5 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Documentos Habilitação Condução</p>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg  py-6">
          <table class="w-full text-sm font-normal text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class="py-4 pl-4 pr-8 ">
                  Tipo
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Número
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Entidade
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Data Emissão
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Situação
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal pl-4 py-6 whitespace-nowrap dark:text-white"
                >
                  Carta de Condução
                </th>
                <td class="py-6 pr-10 pl-2">C-123567</td>
                <td class="py-6 pr-10 pl-2">IMTT - Lisboa</td>

                <td class="py-6 pr-10 pl-2  ">1900/01/01</td>
                <td class="py-6 pr-10 pl-2  ">Válida</td>
                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>

      <div className="information-6 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Habilitação Condução - Categorias</p>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg py-6">
          <table class="w-full text-sm font-normal text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class="py-4 pl-4 pr-8 ">
                  Categoria
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Desc Categoria
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Data Início
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Data Validade
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Restrições
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal py-6 pl-4 whitespace-nowrap dark:text-white"
                >
                  B
                </th>
                <td class="py-6 pr-10 pl-2">LIGEIROS</td>
                <td class="py-6 pr-10 pl-2">2016-05-05</td>

                <td class="py-6 pr-10 pl-2  ">2017-05-05</td>

                <td class="py-6 pr-10 pl-2  "></td>
              </tr>

              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal pl-4 py-6 whitespace-nowrap dark:text-white"
                >
                  B
                </th>
                <td class="py-6 pr-10 pl-2">LIGEIROS</td>
                <td class="py-6 pr-10 pl-2">2016-05-05</td>

                <td class="py-6 pr-10 pl-2  ">2017-05-05</td>

                <td class="py-6 pr-10 pl-2  "></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>
      <div className="information-7 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Outros Documentos</p>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg  py-6">
          <table class="w-full text-sm font-normal text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class="py-4 pl-4 pr-8 ">
                  Tipo
                </th>
                <th scope="col" class="py-4 pr-8 pl-2 border-l">
                  Número
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Entidade
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Data Emissão
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Data Limite
                </th>
                <th scope="col" class=" py-4 pl-2 border-l-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal pl-4 py-6 whitespace-nowrap dark:text-white"
                >
                  Carta de Condução
                </th>
                <td class="py-6 pr-10 pl-2">C-123567</td>
                <td class="py-6 pr-10 pl-2">IMTT - Lisboa</td>

                <td class="py-6 pr-10 pl-2  ">1900/01/01</td>
                <td class="py-6 pr-10 pl-2  ">2026-05-05</td>
                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal pl-4 py-6 whitespace-nowrap dark:text-white"
                >
                  NIF
                </th>
                <td class="py-6 pr-10 pl-2">C-123567</td>
                <td class="py-6 pr-10 pl-2">AT</td>

                <td class="py-6 pr-10 pl-2  ">1900/01/01</td>
                <td class="py-6 pr-10 pl-2  ">2026-05-05</td>
                <td class="py-6  pl-3"><BsInfoCircleFill className='p-1 border text-[#084f87]' size={30}/></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>
      <div className="information-8 my-14 mx-4 rounded-xl   border">
        <div className="text-xl px-4 py-6 border-b font-semibold flex items-center justify-between ">
          <p>Moradas</p>
        </div>
        <div className="px-4 py-4 pb-4 flex items-center space-x-9 text-[#084f87]">
          <p className="flex items-center space-x-3">
            <MdViewColumn size={24} />
            <span>Colunas</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFileDownload size={24} />
            <span>filtros</span>
          </p>
          <p className="flex items-center space-x-3">
            <MdFilterList size={24} />
            <span>exportar</span>
          </p>
        </div>

        <div class="overflow-x-auto relative  sm:rounded-lg  py-6">
          <table class="w-full text-sm font-normal  text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-black/75 uppercase leading-[0px]">
              <tr>
                {" "}
                <th scope="col" class="py-4 pl-4 pr-8 ">
                  Morada
                </th>
                <th scope="col" class="py-4  pr-8 "></th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal py-6 pl-4 whitespace-nowrap dark:text-white"
                >
                  Av. António Augusto de Aguiar 39, Lisboa
                </th>
                <td class="py-6 pr-10  pl-2">
                  <span class="px-1 py-1.5 rounded-full bg-yellow-400">
                    Principal
                  </span>
                </td>
              </tr>
              <tr class="bg-white border-y text-sm  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class=" font-normal py-6 pl-4 whitespace-nowrap dark:text-white"
                >
                  Av. António Augusto de Aguiar 39, Lisboa
                </th>
                <td class="py-6 pr-10 pl-2">
                  <span class="px-1 py-1.5 rounded-full bg-yellow-400">
                    Principal
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500/90">
            <p></p>
            <div className="flex items-center space-x-2">
              <p>Lorem ipsum dolor:</p>

              <select class="select w-14 p-0 text-black m-0 border-none ">
                <option disabled selected>
                  5
                </option>

                <option>10</option>
                <option>15</option>
              </select>
              <p>1-1 de 1</p>
            </div>

            <span className="flex items-center space-x-4">
              {" "}
              <MdKeyboardArrowLeft size={25} />
              <MdKeyboardArrowRight size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Useridentify;
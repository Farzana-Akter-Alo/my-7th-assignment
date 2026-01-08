# React Basics Notes

এই প্রজেক্টে React-এর basic concepts নিয়ে লেখা হয়েছে।

## Topics

- JSX
- State and Props
- useState Hook
- Event Handling

## Question & Answer

## JSX কী?

JSX হলো JavaScript-এর একটি syntax, যেটা দিয়ে JavaScript-এর ভেতরে HTML-এর মতো কোড লেখা যায়।

## State এবং Props

State-- হলো component-এর নিজের data, যেটা সময়ের সাথে change হতে পারে।  
Props-- হলো parent component থেকে child component-এ পাঠানো data, যেটা modify করা যায় না।

## useState Hook কী?

useState হলো React-এর একটি hook, যেটা দিয়ে functional component-এ state ব্যবহার করা যায়।

## Component-এর মধ্যে State শেয়ার করা

React-এ সাধারণত state parent component-এ রাখা হয়।  
তারপর props এর মাধ্যমে child component-এ পাঠানো হয়।  
এভাবে একাধিক component একই state ব্যবহার করতে পারে।

## React-এ Event Handling

React-এ event handling করা হয় function দিয়ে।  
যেমন : onClick, onChange ইত্যাদিতে function pass করা হয়, যেটা event ঘটলে run করে।
